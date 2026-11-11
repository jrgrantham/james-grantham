# Supplied project artwork

The five PNGs retain the supplied artwork without redrawing. All outputs are 512 × 512 pixels; resizing is uniform.

- `kitchen.png`: pan from `four-original-icons/kitchen.png`.
- `music.png`: notes from `four-original-icons/music.png`.
- `aquarium.png`: fish from `four-original-icons/aquarium.png`.
- `garage.png`: car from `four-original-icons/rc-garage.png`.
- `engineering.png`: clipboard from `Olive clipboard flowchart.png`.

The four 550 × 500 originals were first centered on white 550 × 550 canvases, then resized to 512 × 512. The 1536 × 1024 clipboard original was cropped to a 940 × 940 square at x=298, y=37, retaining the entire tile, artwork and shadow, then resized to 512 × 512. Both preparations give the visible tile approximately 90% of the canvas width. The original tile aspect ratios are retained.

Preparation used macOS `sips`: apply padding/cropping in one invocation, then uniform resizing in a second invocation. The source files were supplied separately and are not required at runtime. CSS uses square image slots, `object-fit: contain`, and multiply blending to integrate the white outer margins with the existing page and panel backgrounds.
