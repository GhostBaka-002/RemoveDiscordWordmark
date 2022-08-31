module.exports = (_ => {
	const config = {
		"info": {
			"name": "RemoveDiscordWordmark",
			"author": "GhostBaka002",
			"version": "1.0.0",
			"description": "I wrote this into my customCss area for BetterDiscord and wanted to see if I could make it work as a plugin"
		}
	};

	/*
    ------------------------------------------------------
    Gets rid of the stupid wordmark in the top left corner
    By GhostBaka002
    ------------------------------------------------------
    */
    [class="wordmarkWindows-2dq6rw wordmark-2u86JB"] {
        display: none;
    }
	})(window.BDFDB_Global.PluginUtils.buildPlugin(config));
})();
