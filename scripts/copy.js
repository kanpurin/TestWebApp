const fs = require('fs-extra');
const path = require('path');

// コマンドライン引数からディレクトリを取得
const directory = process.argv[2];

if (directory) {
  // 実行したディレクトリのdocsパス
  const currentDirectoryDocs = path.join(process.cwd(), 'docs');

  // 引数で渡されたディレクトリ内のdocsパス
  const sourcePath = path.join(directory, 'docs');
  
  fs.pathExists(sourcePath, (err, exists) => {
    if (err) {
      console.error(`エラーが発生しました: ${err}`);
    } else {
      if (exists) {
        fs.copy(sourcePath, currentDirectoryDocs, (err) => {
          if (err) {
            console.error(`コピー中にエラーが発生しました: ${err}`);
          } else {
            console.log(`ディレクトリ ${sourcePath} を現在のディレクトリの docs にコピーしました。`);
          }
        });
      } else {
        console.error(`ディレクトリ ${sourcePath} が見つかりません。`);
      }
    }
  });
} else {
  console.error('ディレクトリが指定されていません。');
}
