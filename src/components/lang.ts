export const zh_CN = {
    desc: '拖动滑块，使图片角度为正',
    getFaild: '信息获取失败',
    loadFaild: '图片加载失败',
    loadImg: '获取验证图片...',
    loadTips: '获取信息中...',
    lostProps: '缺少props',
    refresh: '换图',
    sendError: '提交失败',
    success: '完成检测',
    title: '安全验证',
    verifying: '检测中...',
    wait: '待滑动和验证',
};

export const en = {
    desc: 'Drag the slider to make the picture angle positive',
    getFaild: 'Load Fail.',
    loadFaild: 'Image failed to load.',
    loadImg: 'Obtain verification image.',
    loadTips: 'Access to information.',
    lostProps: 'Missing props',
    refresh: 'Refresh',
    sendError: 'Submission failed.',
    success: 'success',
    title: 'Safety certification',
    verifying: 'Verifying.',
    wait: 'Sliding and verify.',
};

export function choose(lang: string): LangType {
    return lang === 'zh_CN' ? zh_CN : en;
}

export type LangType = typeof en;