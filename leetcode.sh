#!/bin/bash

if [ -z "$1" ]
then
  echo "请输入 leetcode 编号"
  exit 0
fi

git add .
git commit -m "feat(leetcode): $1"
git push
