export interface StaticImageData {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
  blurWidth?: number;
  blurHeight?: number;
}

export interface StaticRequire {
  default: StaticImageData;
}

export type ImageType = StaticRequire | StaticImageData | string;

export type SwipperDataType = {
  ind?: number;
  title: string;
  subTitle?: string;
  text?: string;
  Svg?: any;
};
