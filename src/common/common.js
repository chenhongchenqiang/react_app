export function getImageUrl(path) {
    return window.pageConfig.ImageBaseUrl + path;
}
export function getProductImageUrl(picturePath, size) {
    if (!picturePath) {
        return '';
    }
    picturePath = picturePath.replace('{0}', `${size}x${size}`);
    return `${window.pageConfig.ImageBaseUrl}${picturePath}`;
}