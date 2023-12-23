const fs = require('fs-extra');
const path = require('path');

// 引数からディレクトリを取得
const directory = process.argv[2];

if (directory) {
  const sourcePath = path.join(directory, 'docs');
  const destinationPath = 'docs'; // npm run copyを実行したディレクトリのdocs

  fs.remove(destinationPath, (err) => {
    if (err) {
      console.error(`ディレクトリの削除中にエラーが発生しました: ${err}`);
      return;
    }
    fs.copy(sourcePath, destinationPath, (err) => {
      if (err) {
        console.error(`コピー中にエラーが発生しました: ${err}`);
      } else {
        console.log(`ディレクトリ ${sourcePath} を ${destinationPath} にコピーしました。`);
      }
    });
  });
} else {
  console.error('ディレクトリが指定されていません。');
}
