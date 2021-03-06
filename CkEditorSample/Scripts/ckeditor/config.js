/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function (config) {

    config.htmlEncodeOutput = true; //輸入資料執行 htmlEncode
    config.languages = 'zh'; //指定語系
    config.skin = 'moono-dark'; //指定皮膚
    config.removeDialogTabs = 'image:advanced;link:advanced'; //移除上傳圖片視窗中進接標籤
    config.image_previewText = 'Image'; //自訂預覽圖片區塊文字(若要淨空ckeditor/plugins/image/dialogs/image.js搜尋config.image_previewText|| 刪除或者後假字敘述)

    /**
     * 客製化區塊
     */
    config.toolbarGroups = [
        { name: 'document', groups: ['mode', 'document', 'doctools'] },
        { name: 'clipboard', groups: ['clipboard', 'undo'] },
        { name: 'editing', groups: ['find', 'selection', 'spellchecker', 'editing'] },
        { name: 'forms', groups: ['forms'] },
        '/',
        { name: 'basicstyles', groups: ['basicstyles', 'cleanup'] },
        { name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi', 'paragraph'] },
        { name: 'links', groups: ['links'] },
        { name: 'insert', groups: ['insert'] },
        '/',
        { name: 'styles', groups: ['styles'] },
        { name: 'colors', groups: ['colors'] },
        { name: 'tools', groups: ['tools'] },
        { name: 'others', groups: ['others'] },
        { name: 'about', groups: ['about'] }
    ];

    config.removeButtons = 'Replace,SelectAll,Scayt,Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,HiddenField,NumberedList,BulletedList,Indent,Outdent,Blockquote,CreateDiv,BidiLtr,BidiRtl,Language,Unlink,Anchor,Flash,Table,HorizontalRule,Smiley,SpecialChar,PageBreak,Iframe';

    /**
     * CkFinder 設定
     */
    config.filebrowserBrowseUrl = '/Scripts/ckfinder/ckfinder.html';
    config.filebrowserImageBrowseUrl = '/Scripts/ckfinder/ckfinder.html?Types=Images'; //增加路徑後會出現上傳按鈕

    CKFinder.setupCKEditor(null, '/Scripts/ckfinder/'); // 指定 CkFinder 目錄位置

};