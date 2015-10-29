# fis3-deploy-filter-packaged-file
Filter files that have been packaged and do not deploy them.

FIS3中，release时过滤掉已经打过包的文件不再发布。

### 使用方法
    
    fis.match('*', {
        deploy: fis.plugin('filter-packaged-file')
    });

具体fis3插件的使用方法请查阅fis3官方文档： [链接](http://fis.baidu.com/fis3/docs/beginning/intro.html)