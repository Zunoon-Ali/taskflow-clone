import React from 'react';

function Spacer({rotate}) {
  return (
    <section
      id="spacer"
      className="relative h-[150px] w-full overflow-hidden z-[-1]"
    >
      <div
        className={`
          absolute inset-0 
          bg-gradient-to-t from-black via-gray-900/40 to-transparent 
          blur-2xl opacity-80 ${rotate}
        `}
      ></div>
    </section>
  );
}

export default Spacer;
