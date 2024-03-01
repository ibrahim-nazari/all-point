import React from "react";

const Map = () => {
  return (
    <div className="container-fluid relative">
      <div className="grid grid-cols-1">
        <div className="w-full leading-[0] border-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1664532162126!2d-74.0005234880454!3d40.714352071274035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a26f7cdb6db%3A0xdbdb03722e7ad673!2sDoyers%20St%2C%20New%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1709214524532!5m2!1sen!2s"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: 0 }}
            className="w-full h-[500px]"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Map;
