import React from 'react';

function Spacer({ gradient = "bg-gradient-to-b from-gray-100 via-gray-900 to-black" }) {
  return (
    <section
      id="spacer"
      className="relative min-h-[60vh] w-full overflow-hidden z-[-1]"
    >
      <div className={`absolute inset-0 ${gradient}`}></div>
    </section>
  );
}

export default Spacer;
