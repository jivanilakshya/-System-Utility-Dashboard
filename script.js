const os = require('os');
const fs = require('fs');
const path = require('path');

const systemInfo = {
    osType: os.type(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
    cpuDetails: os.cpus()
};

console.log("System Information:");
console.log(`OS Type: ${systemInfo.osType}`);
console.log(`Total Memory: ${(systemInfo.totalMemory / (1024 * 1024)).toFixed(2)} MB`);
console.log(`Free Memory: ${(systemInfo.freeMemory / (1024 * 1024)).toFixed(2)} MB`);
console.log(`CPU Details:`, systemInfo.cpuDetails);

const logFilePath = path.join(__dirname, 'logs', 'system-info.txt');

fs.mkdirSync(path.dirname(logFilePath), { recursive: true });

fs.writeFileSync(logFilePath, JSON.stringify(systemInfo, null, 2), 'utf8');

console.log(`System information saved to ${logFilePath}`);