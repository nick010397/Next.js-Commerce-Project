## yarn add -D prettier

## yarn add -D lint-staged husky

## yarn husky install

## yarn husky add .husky/pre-commit "yarn lint-staged --no-stash"

- /husky에 pre-commit 설정 추가

### lint-staged

- git staged 상태의 파일들만 타겟으로 뭔가 할 수 있게 해줌

### husky

- git hook 동작에 대한 정의를 .git 파일이 아닌 .husky 에서 관리하여 repository에서 공유가 가능하도록 함
