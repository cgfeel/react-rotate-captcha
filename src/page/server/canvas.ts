const calcSize = (img: HTMLImageElement, size: number) => {
    const src_src = Math.max(Math.min(img.width, img.height, size), 160);
    const dst_w = src_src;
    const dst_h = src_src;
  
    const dst_scale = dst_h / dst_w; // Target image ratio
    const src_scale = img.height / img.width; // Original image aspect ratio
  
    const info = src_scale >= dst_scale ? [
        Math.round(img.height * (src_src / img.width)),
        0,
        Math.round((img.height - img.width) / 2)
    ] : [
        Math.round(img.width * (src_src / img.height)),
        Math.round((img.width - img.height) / 2),
        0
    ];
  
    return [img.width, img.height, src_src, ...info];
};
  
const build = (img: HTMLImageElement, sizes: number[]): [number, string] => {
    const [src_w, src_h, size, tar_size, x, y] = sizes;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;

    const max = 275 - 50;
    const min = 0;
  
    const ave = Math.round((360 / max) * 100) / 100;
    const ctx = canvas.getContext("2d");
  
    const coordinate = size / 2;
    const moveX = Math.floor(Math.random() * (max - min + 1)) + 0;
  
    ctx?.beginPath();
    ctx?.translate(coordinate, coordinate);
    ctx?.rotate((moveX * -1 * ave * Math.PI) / 180);
    ctx?.translate(-coordinate, -coordinate);
    ctx?.drawImage(img, x, y, src_w, src_h, 0, 0, tar_size, size);
    ctx!.globalCompositeOperation = "destination-in";
    ctx?.arc(size / 2, size / 2, size / 2, 0, (360 * Math.PI) / 180, false);
    ctx?.fill();
    ctx?.restore();
  
    return [(360 / (max - min)) * moveX, canvas.toDataURL("image/png")];
};
  
export const handle = (url: string, size: number = 350) => new Promise<[number, string]>(resovle => {
    const img = new Image();
    img.onerror = function () {
        console.log("image load error");
    };
  
    img.onload = function () {
        const sizes = calcSize(img, size);
        const arc_img = build(img, sizes);
  
        resovle(arc_img);
    };
  
    img.src = url;
});