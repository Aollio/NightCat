#!/usr/bin/env python3
"""
$Description$<
"""
import codecs

__author__ = "Aollio Hou"
__email__ = "aollio@outlook.com"

import os

cwd = os.getcwd()
dir_path = cwd + "/src"


def inplace(orig_path, encoding='utf8'):
    """Modify a file in-place, with a consistent encoding."""
    new_path = orig_path + '.modified'
    with codecs.open(orig_path, encoding=encoding) as orig:
        with codecs.open(new_path, 'w', encoding=encoding) as new:
            for line in orig:
                yield line, new
    os.rename(new_path, orig_path)


# do_dir(dir_path)
def do_replace(path):
    for line, new in inplace(path):
        line = line.replace("tappable", "")
        line = line.replace("(click)", "tappable (click)")
        new.write(line)


def do_dir(path):
    for file_name in os.listdir(path):
        file_path = os.sep.join([path, file_name])
        if os.path.isdir(file_path):
            do_dir(os.path.join(file_path))
        if os.path.isfile(file_path) and file_path.endswith(".html"):
            print("do:", file_path)
            do_replace(file_path)


do_dir(dir_path)
