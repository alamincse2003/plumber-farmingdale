"use client";

export default function Map() {
  return (
    <section className="bg-gray-100">
      <div>
        <div className=" w-full h-[400px] sm:h-[500px] lg:h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d96761.296292232!2d-73.404843!3d40.722628!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e82ac6fdec2941%3A0x8e01bc65cb0540eb!2s276%20Staples%20St%2C%20Farmingdale%2C%20NY%2011735!5e0!3m2!1sen!2sus!4v1758779886476!5m2!1sen!2sus"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded shadow"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
