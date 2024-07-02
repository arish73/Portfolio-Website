import React from 'react';


const Experience = () => {
  return (
    <div className="bg-black text-white w-full mt-20 pt-8">
      <div className="text-center">
        <div>
          <h2 className="text-4xl font-semibold">Experience</h2>
        </div>
        <div class="bg-grey rounded-lg p-6 mx-auto border border-white">
            <div class="flex justify-between items-center mb-4 text-red">
                <span class="text-lg font-semibold">leftText</span>
                <span class="text-lg font-semibold">rightText</span>
            </div>
            <div>
                <p class="text-white">Welcome to Tailwind Play, the official Tailwind CSS playground!

                Everything here works just like it does when you're running Tailwind locally
                with a real build pipeline. You can customize your config file, use features
                like `@apply`, or even add third-party plugins.

                Feel free to play with this example if you're just learning, or trash it and
                start from scratch if you know enough to be dangerous. Have fun!
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
