#!/bin/bash
# Pre-commit: 提醒同步更新 CLAUDE.md 和 README.md

STAGED=$(git diff --cached --name-only)
DOCS_UPDATED=$(echo "$STAGED" | grep -E '^(CLAUDE\.md|README\.md)$')
OTHER_CHANGES=$(echo "$STAGED" | grep -v -E '^(CLAUDE\.md|README\.md)$' | grep -v '^$')

if [ -n "$OTHER_CHANGES" ] && [ -z "$DOCS_UPDATED" ]; then
  echo ""
  echo "============================================="
  echo "  ⚠  CLAUDE.md / README.md 未在本次提交中"
  echo "============================================="
  echo "  如果以下变更影响项目结构或行为，"
  echo "  建议同步更新这两个文档："
  echo ""
  echo "$OTHER_CHANGES" | head -10 | sed 's/^/    /'
  echo ""
  echo "  跳过提醒请按回车，取消提交请按 Ctrl+C"
  echo "============================================="
  read -r _
fi

exit 0
