import React from 'react';

const stats = [
    { value: '50+', label: 'Senior Engineers' },
    { value: '5-15+', label: 'Years Avg. Experience' },
    { value: '<1 Week', label: 'Time to Start' },
    { value: '100%', label: 'W2 Employees' },
];

const TrustBar = () => {
    return (
        <div className="bg-white border-b border-gray-100 py-12 md:py-16">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12" data-aos="fade-up" data-aos-delay="200">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
                                {stat.value}
                            </div>
                            <div className="text-sm text-gray-500 font-medium mt-2">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TrustBar;
