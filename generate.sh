# 确定插件和编译器地址
# 注意：Windows 下需要修改脚本以适应 cmd 环境，并且要求绝对路径
# PROTOC_GEN_TS_PATH=`which protoc-gen-ts`
# PROTOC_GEN_GRPC_PATH=`which grpc_tools_node_protoc_plugin`

# 输出目录
OUT_DIR="./src"
# seaweedfs clone 地址
WEED_DIR="./seaweedfs"

# protoc \
#     --plugin="protoc-gen-ts=$PROTOC_GEN_TS_PATH" \
#     --plugin="protoc-gen-grpc=$PROTOC_GEN_GRPC_PATH" \
#     --js_out="import_style=commonjs,binary:$OUT_DIR" \
#     --ts_out="service=grpc-node:$OUT_DIR" \
#     --grpc_out="$OUT_DIR" \
#     --proto_path="$WEED_DIR/weed/pb" \
#     $WEED_DIR/weed/pb/*.proto

rm -rf $OUT_DIR
mkdir -p $OUT_DIR

grpc_tools_node_protoc \
    --js_out=import_style=commonjs,binary:$OUT_DIR \
    --grpc_out=$OUT_DIR \
    --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` \
    -I $WEED_DIR/weed/pb \
    $WEED_DIR/weed/pb/*.proto

grpc_tools_node_protoc \
    --plugin=protoc-gen-ts=`which protoc-gen-ts` \
    --ts_out=$OUT_DIR \
    -I $WEED_DIR/weed/pb \
    $WEED_DIR/weed/pb/*.proto

date > $OUT_DIR/.buildinfo.txt
git -C $WEED_DIR rev-parse --abbrev-ref HEAD >> $OUT_DIR/.buildinfo.txt
git -C $WEED_DIR rev-parse HEAD >> $OUT_DIR/.buildinfo.txt
