#!/bin/bash

if [ -z "$1" ]
then
  echo "请输入 leetcode 编号"
  exit 0
fi

git add .
git commit -m "$1"
git push
