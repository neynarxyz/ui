# AspectRatio

Container that maintains a consistent aspect ratio, automatically adjusting height based on width.

## Import

```tsx
import { AspectRatio } from "@neynar/ui/aspect-ratio"
```

## Anatomy

```tsx
<AspectRatio ratio={16 / 9}>
  <img src="..." alt="..." />
</AspectRatio>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| ratio | number | - | Aspect ratio as width/height (e.g., 16/9, 1, 4/3) |
| className | string | - | Additional CSS classes |
| children | ReactNode | - | Content to display within aspect ratio container |

All standard `div` props are supported.

## Common Aspect Ratios

| Ratio | Value | Use Case |
|-------|-------|----------|
| 16:9 | 16/9 | Video content, YouTube thumbnails, widescreen |
| 4:3 | 4/3 | Traditional displays, some photography |
| 1:1 | 1 | Square images, Instagram posts, NFTs, profile pictures |
| 21:9 | 21/9 | Ultrawide/cinematic content, hero banners |
| 9:16 | 9/16 | Vertical video (stories, reels) |
| 2:1 | 2/1 | Panoramic images, Twitter banners |

## Examples

### Video Thumbnail

```tsx
<AspectRatio ratio={16 / 9} className="overflow-hidden rounded-md">
  <img
    src="/video-thumbnail.jpg"
    alt="Video thumbnail"
    className="size-full object-cover"
  />
  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
    <PlayIcon className="size-12" />
  </div>
</AspectRatio>
```

### NFT Gallery

```tsx
<div className="grid grid-cols-4 gap-4">
  {nfts.map((nft) => (
    <AspectRatio key={nft.id} ratio={1} className="overflow-hidden rounded-md">
      <img
        src={nft.image}
        alt={nft.name}
        className="size-full object-cover hover:scale-110 transition-transform"
      />
    </AspectRatio>
  ))}
</div>
```

### Profile Banner

```tsx
<AspectRatio ratio={21 / 9} className="overflow-hidden">
  <img
    src="/banner.jpg"
    alt="Profile banner"
    className="size-full object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
  <div className="absolute bottom-6 left-6 text-white">
    <h3 className="text-2xl font-bold">Channel Name</h3>
  </div>
</AspectRatio>
```

### Placeholder Content

```tsx
<AspectRatio ratio={16 / 9} className="bg-muted flex items-center justify-center rounded-md">
  <div className="text-center">
    <ImageIcon className="size-12 text-muted-foreground" />
    <p className="text-sm">Upload Image</p>
  </div>
</AspectRatio>
```

## Usage Notes

- Always use `overflow-hidden` with images to prevent content overflow
- Combine with `object-cover` for images that fill the container
- Use `object-contain` to fit entire image with possible letterboxing
- Container width is flexible; height is calculated automatically
- Works with any content type: images, video, gradients, custom elements

## Related

- [Card](./card.llm.md) - Often used together for media cards
