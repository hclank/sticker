declare module "dom-to-image" {
  type FilterFn = (domNode: HTMLElement) => boolean;

  type DomToImageOptions = {
    filter?: FilterFn;
    bgcolor?: string;
    width?: number;
    height?: number;
    style?: Record<string, string>;
    quality?: number;
    imagePlaceholder?: string;
    cacheBust?: boolean;
  };

  export function toSvg(
    node: Node,
    options?: DomToImageOptions
  ): Promise<string>;

  export function toPng(
    node: Node,
    options?: DomToImageOptions
  ): Promise<string>;

  export function toJpeg(
    node: Node,
    options?: DomToImageOptions
  ): Promise<string>;

  export function toBlob(
    node: Node,
    options?: DomToImageOptions
  ): Promise<Blob>;

  export function toPixelData(
    node: Node,
    options?: DomToImageOptions
  ): Promise<Uint8Array>;

  export function toCanvas(
    node: Node,
    options?: DomToImageOptions
  ): Promise<HTMLCanvasElement>;

  const domtoimage: {
    toSvg: typeof toSvg;
    toPng: typeof toPng;
    toJpeg: typeof toJpeg;
    toBlob: typeof toBlob;
    toPixelData: typeof toPixelData;
    toCanvas: typeof toCanvas;
  };

  export default domtoimage;
}
