const { override, fixBabelImports ,addLessLoader} = require('customize-cra');

 module.exports = override(
     fixBabelImports('import', {
       libraryName: 'antd-mobile',
       libraryDirectory: 'es',
       style: true,
     }),
   addLessLoader({
     javascriptEnabled: true,
     modifyVars: {
       "@brand-primary": "#1cae82",  //正常情况下的颜色
       "@brand-primary-tap": "#1DA57A",  //按下的颜色
     },
   }),
 );
