

escape_metacharacters() {
  local input="$1"
  local escaped_chars='[.*+?|(){}\\/]'
  echo "$input" | sed -E "s/$escaped_chars/\\\\&/g"
}

update_next_on_pages_version_in_packagejson() {
    file=$1
    nop_regex='"@cloudflare\/next-on-pages": ".+"(,?)'
    nop_version=$(escape_metacharacters $NEXT_ON_PAGES_VERSION)
    new_nop_line="\"@cloudflare\/next-on-pages\": \"$nop_version\"\1"
    echo "updating $file"
    if [[ "$OSTYPE" == "darwin"* ]]; then
        sed -E -i '' "s/${nop_regex}/${new_nop_line}/" $file
    else
        sed -E -i "s/${nop_regex}/${new_nop_line}/" $file
    fi
}

update_eslint_plugin_next_on_pages_version_in_packagejson() {
    file=$1
    nop_regex='"eslint-plugin-next-on-pages": ".+"(,?)'
    # To keep things simple let's just set this to latest, later if
    # needed we can make this also configurable like the nop version
    new_eslint_nop_line="\"eslint-plugin-next-on-pages\": \"latest\"\1"
    echo "updating $file"
    if [[ "$OSTYPE" == "darwin"* ]]; then
        sed -E -i '' "s/${nop_regex}/${new_eslint_nop_line}/" $file
    else
        sed -E -i "s/${nop_regex}/${new_eslint_nop_line}/" $file
    fi
}

find . -type f -name "package.json" ! -path "*/node_modules/*" | while read -r file; do
 update_next_on_pages_version_in_packagejson "$file"
 update_eslint_plugin_next_on_pages_version_in_packagejson "$file"
done
