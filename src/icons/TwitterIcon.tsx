import * as React from "react";
import { SVGProps } from "react";
const TwitterIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={29}
    height={28}
    fill="none"
    {...props}
  >
    <path fill="url(#a)" d="M0 0h28v28H0z" transform="translate(.78)" />
    <defs>
      <pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#b" transform="scale(.03571)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAA3RJREFUSEu1lsuLHFUUh79bVd3VnZ7pzujMyGQUNyFEMIpRIyi6EBcuBMFMb1Q0gwvJUsjGVf4BUSJCXLkxLrQHQRBxpUh8xI0LQTSRiDLMEJzpZsZ+P+recG51NZWmqudBe1fd9Tjf/Z3zu6eOWqlUP1NKlY02GkcpBYopLmOMUSiNwkWbT1V5rWYMGAyWNu1lgBCKQilUuVINQDlGIWCcaSsECxNRSsArazU9ujBlWJQtg01rCJWUTjuNk+IdGmjMnUUf/58GTQXGA6QFd5QYAvFCaIDh0mObicMTgRFAXnSG1o2uxe9VG208BT1jKOZyuI5jY2ddcWCy7ScqdB1odXtkvCwZVxHoMEhgDJ1Oi5cfvovH7z/CVsPw0U8b4GYpHfG5WRvgZ5xEaCJQUrXV6HL2wRLPnszzxpWblGaKFHOe7Qq1RouLzy3x5LFQkawB0Ac+/qXFlzea5DJeYhkTga6Czf/arJ6e49xDea7vwqXvbvHbdo/2QHFizuFKeRlJedg1wHOUhb77Y4Mf1jv4nrt/oKjoDDTzmS6XXzpGVroF8Ou24ZsbOxD0eevpRZsyWRpwleLbv7tc+HqD4wtz9vmkOiYqFGCzF/DIPR7nz5RYKoSbjfe+uIm0AddRfP5Hmw9+3mFxNjeq97jMVGC9F/DEss/FZ2ZDFZI++TE8BuLekcIh8L1rdb76s8ndBR/ZRNJKdamo/Lfe5JVTJV5/dBYvftDGIolyMcxrlU265Gw9D3Qs5GFR0O5r7psJeP+FRcQCSc1goI0FfHG9wzvfb7E8N5OqzpZlvJfeuTNDv99n9fRRnj/hW5XxL9jAQMZR7Bp49ZN1sn7B1vLAvXTUTbRhq95gc3eHt59aYvXMAnpYnChwCzi/tkG1n6WQ9WytJ31YU2sogR+7N8+Lp/Icn4HM2LbFE1fXB1y6eou2yVLMZ1KdObGXxu3uoDm54PPAvMfy0Qx5z7XH5a9qj2v/1Pl9u8d8sWDTupeyCLpn8252AtqDnn0+2oyDYjbvk/PC1rZfWKJpop1EwcUCo1lH8jj0RNTS9vsdnKgwnvO0gAcF7Rs40eOHuKnOVqpaxlE74PxvQ1RscitXaoGMVMPqTB0aCdEY4xhlVLlSs+0jGuUOkaU9X5G+LzOwrftKpfqhUupNHaZU2FOdv0Xh0GBi9su3Ad1J4mJCu35zAAAAAElFTkSuQmCC"
        id="b"
        width={28}
        height={28}
      />
    </defs>
  </svg>
);
export default TwitterIcon;
