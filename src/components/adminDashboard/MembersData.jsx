import React from 'react';

const CompanyName = ({ name }) => (
  <div className="flex items-center gap-4 w-1/2">
    <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
    <span className="font-medium">{name}</span>
  </div>
);

const ProgressBar = ({ usage, maxUsage }) => {
  // Calculate the progress dynamically
  const progress = Math.min(usage / maxUsage, 1);  // Ensure that progress doesn't exceed 1 (100%)
  
  return (
    <div className="w-full bg-gray-200 h-2 w-1/2 rounded-full">
      <div className="h-2 bg-blue-500 rounded-full" style={{ width: `${progress * 100}%` }}></div>
    </div>
  );
};

const Usage = ({ usage, maxUsage }) => (
  <span className="text-gray-500 text-sm">
    {usage} GO / {maxUsage} GO
  </span>
);

const MembresData = () => {
  const data = [
    { name: 'Société X', usage: 8.5, maxUsage: 15 },
    { name: 'Société Y', usage: 13.1, maxUsage: 15 },
    { name: 'Société Z', usage: 10.99, maxUsage: 15 },
    { name: 'Société V', usage: 5.71, maxUsage: 15 },
  ];

  return (
    <div className="max-w-2xl w-full max-h-2xl mx-auto bg-white rounded-lg shadow-md p-6">
      <div className="gap-6 flex flex-col">
        {data.map((item, index) => (
          <div key={index} className="flex items-center justify-between w-full gap-6">
            <CompanyName name={item.name} />
            <div className="flex items-center gap-4 w-full justify-between">
              <ProgressBar usage={item.usage} maxUsage={item.maxUsage} />
              <Usage usage={item.usage} maxUsage={item.maxUsage} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MembresData;
