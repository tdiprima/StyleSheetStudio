#!/usr/bin/env bash
# Shows you the history of a file (using gitk) in all its incarnations

gitk_follow() {
  while (("$#")); do
    git log --oneline --name-status --follow "$1"
    shift
  done | perl -ne 'if( s{^(?:[ACDMRTUXB]|R\d+)\s+}{} ) { s{\s+}{\n}g; print; }' | sort -u
}

#gitk $(gitk_follow some_file)
gitk $(gitk_follow "scroll-show-hover/recreate-table.html")
