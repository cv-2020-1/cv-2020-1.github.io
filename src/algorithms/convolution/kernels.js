const blur = 1.0 / 9.0;
const blur_gaussian = 1.0/16.0;

export const BoxBlurKernel = [[ blur, blur, blur ], [ blur, blur, blur ], [ blur, blur, blur ]];   
export const GaussianBlurKernel = [[1*blur_gaussian,2*blur_gaussian,1*blur_gaussian],[2*blur_gaussian,4*blur_gaussian,2*blur_gaussian],[1*blur_gaussian,2*blur_gaussian,1*blur_gaussian]];
export const SharpenKernel = [[0, -1, 0],[-1, 5, -1],[0,-1,0]];
export const EdgeDetectionKernel = [[-1, -1 , -1],[-1, 8, -1],[-1, -1, -1]];