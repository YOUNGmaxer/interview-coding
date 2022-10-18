#!/bin/bash

if [ -z "$1" ]
then
  echo "请输入 commit 描述"
  exit 0
fi

git add .
git commit -m "feat(implement): $1"
git push
