(function() {
    tinymce.PluginManager.requireLangPack('medialibrarylink');
    tinymce.create('tinymce.plugins.MediaLibraryLinkPlugin', {
        init : function(ed, url) {
            this.editor = ed;

            // Register commands
            ed.addCommand('mceMediaLibraryLink', function() {
                var se = ed.selection;

                // No selection and not in link
                if (se.isCollapsed() && !ed.dom.getParent(se.getNode(), 'A'))
                return;

                ed.windowManager.open({
                    file : url + '/link.htm',
                    width : 480,
                    height : 400,
                    inline : 1
                }, {
                    plugin_url : url
                });
            });

            // Register buttons
            ed.addButton('link', {
                title : 'medialibrarylink.link_desc',
                cmd : 'mceMediaLibraryLink'
            });

            ed.addShortcut('ctrl+k', 'medialibrarylink.link_desc', 'mceMediaLibraryLink');

            ed.onNodeChange.add(function(ed, cm, n, co) {
                cm.setDisabled('link', co && n.nodeName != 'A');
                cm.setActive('link', n.nodeName == 'A' && !n.name);
            });
        },
        getInfo : function() {
            return {
                longname : 'MediaLibrary plugin',
                author : 'Incuna',
                authorurl : 'http://incuna.com/',
                infourl : 'http://github.com/incuna/feincms-tinymce-plugins',
                version : "0.1"
            };
        }
    });

    // Register plugin
    tinymce.PluginManager.add('medialibrarylink', tinymce.plugins.MediaLibraryLinkPlugin);
})();
