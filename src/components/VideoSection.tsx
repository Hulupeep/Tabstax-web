export function VideoSection() {
  return (
    <div id="video" className="rounded-[14px] border border-line bg-card p-1.5 md:p-2">
      <div className="aspect-video w-full overflow-hidden rounded-[10px] bg-ink">
        <iframe
          className="h-full w-full"
          src="https://www.youtube-nocookie.com/embed/AkPAv3vquck"
          title="HeyStax product demo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}
