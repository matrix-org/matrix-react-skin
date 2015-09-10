# Note of the bash I've used to autogenerate the monotonous part of the skindex file. Maybe this could become a proper tool?

find . | grep -e '.js$' | sed -e "s#\.\/\(.*\)\.js#ComponentBroker.set('\1\', require('./views/\1'));#"
