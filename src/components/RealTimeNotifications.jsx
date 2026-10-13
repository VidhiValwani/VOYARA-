
import { useEffect, useRef, useState } from "react";

function RealTimeNotifications() {
  const [status, setStatus] = useState("Connecting...");
  const [message, setMessage] = useState("");
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState("");

  const socketRef = useRef(null);
  const fileInputRef = useRef(null);

  const [currentUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("user")) || null;
    } catch {
      return null;
    }
  });

  const senderName =
    currentUser?.name ||
    currentUser?.fullName ||
    [currentUser?.firstName, currentUser?.lastName]
      .filter(Boolean)
      .join(" ") ||
    currentUser?.username ||
    currentUser?.email?.split("@")[0] ||
    "Traveller";

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8081");
    socketRef.current = socket;

    socket.onopen = () => setStatus("Connected");

    socket.onmessage = (event) => {
      let incoming;

      try {
        incoming = JSON.parse(event.data);
      } catch {
        incoming = {
          type: "text",
          text: event.data,
          name: "Traveller",
        };
      }

      const type = ["text", "image", "video"].includes(incoming.type)
        ? incoming.type
        : "text";

      setMessages((previous) => [
        ...previous,
        {
          type,
          name: incoming.name || incoming.userName || "Traveller",
          text: incoming.text || incoming.message || "",
          image: type === "image" ? incoming.image : null,
          video: type === "video" ? incoming.video : null,
          fileName: incoming.fileName || "",
          time: incoming.time
            ? new Date(incoming.time).toLocaleTimeString()
            : new Date().toLocaleTimeString(),
        },
      ]);
    };

    socket.onerror = () => setStatus("Connection error");
    socket.onclose = () => setStatus("Disconnected");

    return () => {
      socket.close();
      socketRef.current = null;
    };
  }, []);

  const handleMediaSelect = (event) => {
    const file = event.target.files?.[0];
    setError("");

    if (!file) return;

    const isImage = file.type.startsWith("image/");
    const isVideo = file.type.startsWith("video/");

    if (!isImage && !isVideo) {
      setError("Please select an image or video.");
      event.target.value = "";
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      setError("Please select a file smaller than 2 MB.");
      event.target.value = "";
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      setSelectedMedia({
        name: file.name,
        data: reader.result,
        type: isVideo ? "video" : "image",
      });
    };

    reader.onerror = () => {
      setError("Unable to read the selected file.");
    };

    reader.readAsDataURL(file);
  };

  const sendMessage = (event) => {
    event.preventDefault();

    const text = message.trim();

    if (!text && !selectedMedia) return;

    const socket = socketRef.current;

    if (!socket || socket.readyState !== WebSocket.OPEN) {
      setError("Not connected. Please wait for the server.");
      return;
    }

    const payload = selectedMedia
      ? {
          type: selectedMedia.type,
          name: senderName,
          text,
          [selectedMedia.type]: selectedMedia.data,
          fileName: selectedMedia.name,
        }
      : {
          type: "text",
          name: senderName,
          text,
        };

    try {
      socket.send(JSON.stringify(payload));

      setMessage("");
      setSelectedMedia(null);
      setError("");

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch {
      setError("Message could not be sent. Please try again.");
    }
  };

  const connected = status === "Connected";

  return (
    <section className="relative overflow-hidden bg-[#F7F9F6] px-5 py-16 sm:py-20">
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#D9E6F2]/50 blur-3xl" />

      <div className="relative mx-auto max-w-5xl">
        <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6B8E60]">
              YOUR JOURNEY, IN REAL TIME
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#3E4D3A] sm:text-4xl">
              Stay in the loop.
            </h2>

            <p className="mt-3 max-w-lg text-sm leading-6 text-[#667263] sm:text-base">
              Share travel updates, photos and videos instantly through
              VOYARA Live.
            </p>
          </div>

          <div className="flex w-fit items-center gap-2 rounded-full border border-[#D9E6F2] bg-white px-4 py-2.5 shadow-sm">
            <span
              className={`h-2.5 w-2.5 rounded-full ${
                connected ? "bg-[#6B8E60]" : "bg-amber-500"
              }`}
            />
            <span className="text-sm font-medium text-[#3E4D3A]">
              {status}
            </span>
          </div>
        </div>

        <div className="grid overflow-hidden rounded-[2rem] border border-[#D9E6F2] bg-white shadow-[0_20px_60px_-30px_rgba(62,77,58,0.25)] md:grid-cols-[0.8fr_1.2fr]">
          <div className="flex flex-col justify-between bg-[#3E4D3A] p-7 text-white sm:p-9">
            <div>
              <p className="mt-7 text-xs uppercase tracking-[0.25em] text-[#D9E6F2]">
                VOYARA LIVE
              </p>

              <h3 className="mt-3 text-2xl font-medium leading-snug sm:text-3xl">
                Every update brings the journey closer.
              </h3>

              <p className="mt-4 text-sm leading-6 text-white/75">
                Share messages and memorable travel moments with connected
                VOYARA clients.
              </p>
            </div>

            <div className="mt-8 border-t border-white/20 pt-5">
              <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                CONNECTION
              </p>
              <p className="mt-2 font-medium">
                {connected
                  ? "You're connected and ready."
                  : "Connecting to live server..."}
              </p>
            </div>
          </div>

          <div className="min-w-0 p-5 sm:p-8">
            <div className="flex items-center justify-between gap-3">
              <div>
                <h3 className="text-lg font-semibold text-[#3E4D3A]">
                  Live updates
                </h3>
                <p className="mt-1 text-xs text-[#82907E]">
                  Messages and shared media
                </p>
              </div>

              <span className="rounded-full bg-[#F7F9F6] px-3 py-1.5 text-xs font-medium text-[#6B8E60]">
                {messages.length} updates
              </span>
            </div>

            <div
              aria-live="polite"
              className="mt-5 flex max-h-96 min-h-48 flex-col gap-3 overflow-y-auto rounded-2xl bg-[#F7F9F6] p-3 sm:p-4"
            >
              {messages.length === 0 ? (
                <div className="m-auto px-3 py-8 text-center">
                  <div className="text-3xl text-[#A8C5B0]">✧</div>
                  <p className="mt-3 text-sm font-medium text-[#3E4D3A]">
                    Your journey starts here
                  </p>
                  <p className="mt-1 text-xs leading-5 text-[#82907E]">
                    Send your first message, photo or video.
                  </p>
                </div>
              ) : (
                messages.map((item, index) => (
                  <div
                    key={`${item.time}-${index}`}
                    className="rounded-2xl border border-[#E8EEE6] bg-white p-4 shadow-sm"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#D9E6F2] text-sm font-semibold uppercase text-[#3E4D3A]">
                        {(item.name || "T").charAt(0)}
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="text-xs font-semibold text-[#3E4D3A]">
                            {item.name || "Traveller"}
                          </span>
                          <span className="text-[11px] text-[#82907E]">
                            {item.time}
                          </span>
                        </div>

                        {item.text && (
                          <p className="mt-2 break-words text-sm leading-6 text-[#566352]">
                            {item.text}
                          </p>
                        )}

                        {item.image && (
                          <img
                            src={item.image}
                            alt={item.fileName || "Shared travel photo"}
                            className="mt-3 max-h-64 w-full rounded-xl border border-[#E8EEE6] object-contain"
                          />
                        )}

                        {item.video && (
                          <video
                            src={item.video}
                            controls
                            playsInline
                            preload="metadata"
                            className="mt-3 max-h-64 w-full rounded-xl border border-[#E8EEE6] bg-black"
                          />
                        )}

                        {item.fileName && (
                          <p className="mt-2 break-all text-xs text-[#82907E]">
                            {item.fileName}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            <form onSubmit={sendMessage} className="mt-4">
              <label
                htmlFor="voyara-message"
                className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#6B8E60]"
              >
                Share an update
              </label>

              <textarea
                id="voyara-message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Write a travel update..."
                rows={2}
                className="w-full resize-y rounded-xl border border-[#D9E6F2] bg-[#FCFDFB] px-4 py-3 text-sm text-[#3E4D3A] outline-none transition placeholder:text-[#9AA696] focus:border-[#6B8E60] focus:ring-2 focus:ring-[#A8C5B0]/40"
              />

              <div className="mt-3 rounded-xl border border-dashed border-[#A8C5B0] bg-[#F7F9F6] p-4">
                <label
                  htmlFor="voyara-media"
                  className="flex cursor-pointer items-center gap-3"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D9E6F2] text-xl">
                    📷
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-semibold text-[#3E4D3A]">
                      Add a photo or video
                    </span>
                    <span className="mt-1 block text-xs text-[#82907E]">
                      Image or video · Maximum 2 MB
                    </span>
                  </span>

                  <span className="rounded-lg bg-white px-3 py-2 text-xs font-semibold text-[#3E4D3A] shadow-sm">
                    Browse
                  </span>
                </label>

                <input
                  ref={fileInputRef}
                  id="voyara-media"
                  type="file"
                  accept="image/*,video/*"
                  onChange={handleMediaSelect}
                  className="sr-only"
                />

                {selectedMedia && (
                  <div className="mt-4 rounded-xl bg-white p-3">
                    {selectedMedia.type === "video" ? (
                      <video
                        src={selectedMedia.data}
                        controls
                        playsInline
                        className="max-h-48 w-full rounded-lg bg-black object-contain"
                      />
                    ) : (
                      <img
                        src={selectedMedia.data}
                        alt="Selected travel photo"
                        className="max-h-48 w-full rounded-lg object-contain"
                      />
                    )}

                    <div className="mt-2 flex items-center justify-between gap-2">
                      <span className="truncate text-xs text-[#566352]">
                        {selectedMedia.name}
                      </span>

                      <button
                        type="button"
                        onClick={() => {
                          setSelectedMedia(null);
                          if (fileInputRef.current) {
                            fileInputRef.current.value = "";
                          }
                        }}
                        className="shrink-0 text-xs font-semibold text-red-600"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {error && (
                <p role="alert" className="mt-3 text-sm text-red-600">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={
                  !connected || (!message.trim() && !selectedMedia)
                }
                className="mt-3 w-full rounded-xl bg-[#3E4D3A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#6B8E60] disabled:cursor-not-allowed disabled:opacity-50"
              >
                Send update ↗
              </button>

              <p className="mt-3 text-xs leading-5 text-[#82907E]">
                Updates are broadcast to connected clients. For this demo,
                keep each file under 2 MB.
              </p>
            </form>
          </div>
        </div>

        <p className="mt-5 text-center text-xs tracking-wide text-[#82907E]">
          VOYARA · WHERE THE JOURNEY FEELS THEIR AURA
        </p>
      </div>
    </section>
  );
}

export default RealTimeNotifications;
