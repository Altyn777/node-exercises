import { getFormattedDate } from './functions.js';

export function logger(configString) {
    let result = '';

    return (req, res, next) => {
        if (configString?.includes(':date')) {
            result = getFormattedDate();
            if (configString?.includes(':method') || configString?.includes(':url')) result += ' ';
        }
    
        if (configString?.includes(':method')) {
            result += req.method;
            if (configString?.includes(':url')) result += ' ';
        }
    
        if (configString?.includes(':url')) result += req.url;

        console.log(result);
        next();
    }
}