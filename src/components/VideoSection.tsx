export function VideoSection() {
  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-charcoal text-center mb-4">
          See TabStax in Action
        </h2>
        <p className="text-warm-gray text-center mb-10 font-body">
          Watch how TabStax eliminates the reconstruction tax in under 3 minutes.
        </p>
        <div className="aspect-video w-full">
          <iframe
            className="w-full h-full rounded-2xl shadow-lg"
            src="https://www.youtube-nocookie.com/embed/jcc-PsCdbM8"
            title="TabStax product demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
