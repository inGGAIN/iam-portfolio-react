import React from 'react';

const Portfolio = () => {
   
        return (
            <div
            name="portfolio"
            className="bg-gradient-to-b from-indigo-600 to-gray-200 w-full
             text-white md:h-screen">
                <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                    <div className="pb-8">
                        <p className="text-4xl font-bold inline border-b-4 border-gray-200">
                            Portfolio
                        </p>
                        <p className="py-6">Check out some of my work right here</p>
                    </div>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                        <div className="shadow-md shadow-indigo-500 rounded-lg">
                            <img 
                            src="" alt="images"
                            className="rounded-md duration-300 hover:scale-105" />
                            <div className="flex items-center justify-center">
                                <button>demo</button>
                                <button>code</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

export default Portfolio;