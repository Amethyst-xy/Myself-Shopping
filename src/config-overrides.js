const { override, fixBabelImports,addPostcssPlugins } = require('customize-cra') 
module.exports = override(       
    fixBabelImports('import', {         
        libraryName: 'antd-mobile',         
        style: 'css',       
    }),       
    addPostcssPlugins([        
        require('postcss-px2rem')({ remUnit: 37.5 })    
    ]));