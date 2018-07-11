/*
 *
 * Authors	: Michael Janea (www.michaeljanea.com):
 *              - creator of the original plugin (v1.0 - v1.2)
 *            Juergen Krausz (www.grafikrausz.at):
 *              - updated for FontAwesome 4.7
 *              - modified for Typesetter CMS 5+ native FontAwesome support
 *              - some other small modifications
 *
 * Version	: 1.3
 *
 */

CKEDITOR.dtd.$removeEmpty["span"] = false; 

CKEDITOR.plugins.add('fontawesome', {
  requires: 'widget',
  icons: 'fontawesome',
  init: function(editor) {
    if( typeof(editor.config.cols) == 'string' ){
      /* editor is in iframe - we need to load (Typesetter's native) FontAwesome 4.7 */
      editor.addContentsCss(gpBLink + '/include/thirdparty/fontawesome/css/font-awesome.min.css');
    }
    editor.widgets.add('FontAwesome', {
      button: 'Insert Font Awesome',
      template: '<span class="" style=""></span>',
      dialog: 'fontawesomeDialog',
      allowedContent: 'span(!fa){style}',
      upcast: function(element) {
        return element.name == 'span' && element.hasClass('fa');
      },
      init: function() {
        this.setData('class', this.element.getAttribute('class'));
        this.setData('color', this.element.getStyle('color'));
        this.setData('size', this.element.getStyle('font-size'));
      },
      data: function() {
        var istayl = '';
        this.element.setAttribute('class', this.data.class);
        istayl += this.data.color != '' ? 'color:' + this.data.color + ';' : '';

        //istayl += this.data.size != '' ? 'font-size:' + parseInt(this.data.size) + 'px;' : '';
        /* let's  also allow non-px uints */
        var font_size = this.data.size.trim();
        font_size = (font_size != '' && font_size == parseInt(font_size)) ? font_size + 'px' : font_size;
        istayl += font_size != '' ? 'font-size:' + font_size : '';

        istayl != '' ? this.element.setAttribute('style', istayl) : '';
        istayl == '' ? this.element.removeAttribute('style') : '';
      }
    });
    CKEDITOR.dialog.add('fontawesomeDialog', this.path + 'dialogs/fontawesome.js');
    //CKEDITOR.document.appendStyleSheet(CKEDITOR.plugins.getPath('fontawesome') + 'font-awesome/css/font-awesome.min.css');
  }
});
