import React from 'react';

const specializations = [
    { name: 'Java / Spring Boot', category: 'Backend' },
    { name: 'Python / Django / FastAPI', category: 'Backend' },
    { name: 'React / Angular / TypeScript', category: 'Frontend' },
    { name: 'AWS Cloud Engineering', category: 'Cloud' },
    { name: 'Azure / GCP', category: 'Cloud' },
    { name: 'Kubernetes / Terraform', category: 'DevOps' },
    { name: 'CI/CD Pipelines', category: 'DevOps' },
    { name: 'Selenium / Cypress / SDET', category: 'QA' },
    { name: 'Spark / Kafka / Airflow', category: 'Data' },
    { name: 'Snowflake / PostgreSQL', category: 'Data' },
    { name: 'Microservices Architecture', category: 'Architecture' },
    { name: 'System Design / API Design', category: 'Architecture' },
];

const profiles = [
    {
        role: 'Senior Java Developer',
        years: 8,
        skills: 'Spring Boot, AWS, Microservices, PostgreSQL',
        industries: 'Banking, Insurance',
    },
    {
        role: 'DevOps Engineer',
        years: 6,
        skills: 'Kubernetes, Terraform, AWS, Docker, Python',
        industries: 'Finance, Healthcare',
    },
    {
        role: 'React Frontend Developer',
        years: 5,
        skills: 'React, TypeScript, Redux, GraphQL, Node.js',
        industries: 'Fintech, E-commerce',
    },
    {
        role: 'Data Engineer',
        years: 6,
        skills: 'Python, Spark, Kafka, Airflow, Snowflake',
        industries: 'Banking, Insurance',
    },
];

const TechExpertise = () => {
    return (
        <div id="expertise" className="py-20 md:py-28 bg-gray-900">
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
                        Our Technical Bench
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Senior engineers across the full modern stack, vetted and ready to deploy.
                    </p>
                </div>

                {/* Two column layout */}
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Specialization Tags */}
                    <div data-aos="fade-up" data-aos-delay="100">
                        <h3 className="text-xl font-bold text-white mb-6">Specializations</h3>
                        <div className="flex flex-wrap gap-3">
                            {specializations.map((spec, index) => (
                                <span
                                    key={index}
                                    className="spec-tag-hover bg-white bg-opacity-5 border border-white border-opacity-10 text-blue-300 px-4 py-2 rounded-lg text-sm font-medium cursor-default transition-all duration-200"
                                >
                                    {spec.name}
                                </span>
                            ))}
                        </div>

                        {/* Domain experience */}
                        <div className="mt-10">
                            <h3 className="text-xl font-bold text-white mb-4">Industry Experience</h3>
                            <div className="grid grid-cols-2 gap-3">
                                {['Financial Services', 'Healthcare', 'Insurance', 'Enterprise SaaS', 'Fintech', 'E-commerce'].map((industry, i) => (
                                    <div key={i} className="flex items-center gap-2 text-gray-400 text-sm">
                                        <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        {industry}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sample Profiles */}
                    <div data-aos="fade-up" data-aos-delay="300">
                        <h3 className="text-xl font-bold text-white mb-6">Sample Profiles</h3>
                        <div className="space-y-4">
                            {profiles.map((profile, index) => (
                                <div
                                    key={index}
                                    className="bg-white bg-opacity-5 border border-white border-opacity-10 rounded-xl p-5 hover:bg-opacity-10 transition-all duration-200"
                                >
                                    <div className="flex items-start justify-between mb-2">
                                        <h4 className="text-white font-bold">{profile.role}</h4>
                                        <span className="text-blue-400 text-sm font-semibold bg-blue-400 bg-opacity-10 px-3 py-1 rounded-full">
                                            {profile.years} yrs
                                        </span>
                                    </div>
                                    <p className="text-gray-400 text-sm mb-1">{profile.skills}</p>
                                    <p className="text-gray-500 text-xs">Industries: {profile.industries}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TechExpertise;
