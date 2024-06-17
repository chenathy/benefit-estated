const apiBaseUrl = process.env.NODE_ENV === 'development' 
    ? `${window.location.protocol}//${window.location.hostname}:${process.env.REACT_APP_FRONTEND_PORT}`
    : process.env.REACT_APP_API_URL;

export default apiBaseUrl;