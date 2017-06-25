# riot-pug-sass-es6

## 環境

* npm
* yarn
* riot
* pug
* sass
* babel(es6)
* webpack

## 使い方

1. インストール
    ```bash
    git clone https://github.com/narumi18wa/riot-pug-sass-es6-proj.git
    cd riot-pug-sass-es6-proj
    ./install.sh
    ```
2. `src/` 以下のソースコードを編集する
3. ビルド
    ```bash
    npm run build
    ```

## ディレクトリ構成

* src/
    * ソースコードの配置場所
    * index.pug デフォルトのエントリポイント
    * script/
        * javascriptの配置場所
        * entry/
            * エントリポイントに対応するjsの配置場所
        * tag/
            * tagファイルの配置場所
    * style/
        * sassファイルの配置場所
        * entry/
            * エントリポイントに対応するstyleの記述場所
* dist/
    * ビルド後のソースの配置場所
* tool/
    * build/
        * ビルドスクリプト配置場所
