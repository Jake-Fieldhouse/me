import sys
from pathlib import Path
from PIL import Image


def optimize_png(path: Path) -> None:
    img = Image.open(path)
    img.save(path, optimize=True)


def main(args: list[str]) -> None:
    for pattern in args:
        for file in Path().glob(pattern):
            if file.suffix.lower() == '.png':
                optimize_png(file)
                print(f"Optimized {file}")


if __name__ == '__main__':
    if len(sys.argv) < 2:
        print('Usage: python optimize_png.py <glob patterns>')
        sys.exit(1)
    main(sys.argv[1:])
