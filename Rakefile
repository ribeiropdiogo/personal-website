# coding: utf-8
require 'jekyll'

OPTIONS = {
  "incremental" => true,
  "profile"     => true,
  "watch"       => true,
  "serving"     => true,
}

desc "Generate and view the site locally"
task :serve => :build do
  puts "Running Jekyll...".bold
  Jekyll::Commands::Serve.process(OPTIONS)
end

desc "Build the site for production"
task :build do
  puts 'Building site...'.bold
  Jekyll::Commands::Build.process(OPTIONS)
end

desc "Clean project directory"
task :clean do
  puts 'Cleaning up _site...'.bold
  Jekyll::Commands::Clean.process({})
end

