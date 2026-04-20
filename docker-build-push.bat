@echo off
chcp 65001 >nul
REM Docker 构建和推送脚本 - linktalk-docs
REM 用法: docker-build-push.bat

echo ========================================
echo LinkTalk 管理后台 - 镜像推送
echo ========================================
echo.

set REGISTRY=nrt.vultrcr.com/redpacket
set IMAGE_NAME=%REGISTRY%/linktalk-docs
set VERSION=latest

echo [1/4] 本地构建前端...
call npm run build
if %ERRORLEVEL% neq 0 (
    echo [ERROR] npm build 失败
    exit /b 1
)
echo [OK] 前端构建成功

echo.
echo [2/4] 构建 Docker 镜像...
docker build -t %IMAGE_NAME%:%VERSION% .
if %ERRORLEVEL% neq 0 (
    echo [ERROR] Docker 构建失败
    exit /b 1
)
echo [OK] Docker 构建成功

echo.
echo [3/4] 推送镜像 (latest)...
docker push %IMAGE_NAME%:%VERSION%
if %ERRORLEVEL% neq 0 (
    echo [ERROR] 推送失败
    exit /b 1
)
echo [OK] 推送成功

echo.
echo [4/4] 清理本地镜像...
docker rmi %IMAGE_NAME%:%VERSION% 2>nul
echo [OK] 清理完成

echo.
echo ========================================
echo [OK] 镜像推送完成！
echo ========================================
echo 镜像: %IMAGE_NAME%:%VERSION%
echo.
echo 服务器拉取命令:
echo docker pull %IMAGE_NAME%:%VERSION%
echo ========================================
