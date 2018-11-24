import json

data = '{"inner":{"max_position":"1065915088710848512","has_more_items":false,"items_html":"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n \n","new_latent_count":0},"note":{"d":{"status":"ok","response":null},"b":{"status":"ok","response":{"count":1,"localized_count":"1","timestamp":-1,"new_timestamp":-1,"show_badge_highlighting":true,"success":false}},"t":{"status":"ok","response":null}}}'

print(json.loads(data))