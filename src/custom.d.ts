interface Window {
    startAngular?: Function;
    SObjectModel: any;
}

interface ROError {
    message: string;
}

interface RORecord {
    get(key: string): any;
}