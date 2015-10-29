/*
 *   fis3-deploy-filter-packaged-file
 *   fis release时过滤掉已经打包的文件不再发布
 *   
 *   https://github.com/xiaoyuze88/fis3-deploy-filter-packaged-file
 */

'use strict';

/**
 * deploy 插件接口
 * @param  {Object}   options  插件配置
 * @param  {Object}   modified 修改了的文件列表（对应watch功能）
 * @param  {Object}   total    所有文件列表
 * @param  {Function} next     调用下一个插件
 * @return {undefined}
 */
module.exports = function(options, modified, total, next) {

    var i = modified.length;

    while (i--) {
        // 当对应文件对象有map属性且pkg不为空时，表示该文件已被打包，不再发布
        if (modified[i].map && modified[i].map.pkg) modified.splice(i, 1);
    }

    next();
};
