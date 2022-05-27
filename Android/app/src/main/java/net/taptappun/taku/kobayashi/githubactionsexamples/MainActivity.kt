package net.taptappun.taku.kobayashi.githubactionsexamples

import android.os.Bundle
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity
import com.google.firebase.remoteconfig.FirebaseRemoteConfig
import com.google.firebase.remoteconfig.FirebaseRemoteConfigSettings

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        setupFirebaseRemoteConfig()
    }

    private fun setupFirebaseRemoteConfig() {
        val  firebaseRemoteConfig = FirebaseRemoteConfig.getInstance()
        val configSettings = FirebaseRemoteConfigSettings.Builder()
            .setMinimumFetchIntervalInSeconds(3600)
            .build()
        firebaseRemoteConfig.setConfigSettingsAsync(configSettings)

        val helloTextView = findViewById<TextView>(R.id.hello_world_text)
        val textList = mutableListOf(helloTextView.text);

        firebaseRemoteConfig.fetchAndActivate().addOnCompleteListener(this) { task ->
            if (task.isSuccessful) {
                for ((k, v) in firebaseRemoteConfig.all) {
                    textList.add("$k = ${v.asString()}")
                }
                helloTextView.text = textList.joinToString("\n")
            }
        };
    }
}
