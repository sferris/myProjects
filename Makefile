TOPDIR := $(dir $(lastword $(MAKEFILE_LIST)))

all:
	(cd $(TOPDIR); nodemon server.js)
