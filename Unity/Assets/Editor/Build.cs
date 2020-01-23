using System.IO;
using System.Linq;
using UnityEngine;
using UnityEditor;

public class BatchBuild
{

    // Android ビルド
    [MenuItem("Build/Android")]
    static void AndroidBuild()
    {

        // 有効なシーン一覧のパスを取得
        var scenes = EditorBuildSettings.scenes.Where(s => s.enabled).Select(s => s.path).ToArray();

        // 出力用のファイルを定義
        var outputFile = Application.dataPath + "/androidBuild.apk";
        if (File.Exists(outputFile))
        {
            File.Delete(outputFile);
        }

        var target = BuildTarget.Android;
        var options = BuildOptions.None;

        BuildPipeline.BuildPlayer(scenes, outputFile, target, options);
    }

    // iOSビルド
    [MenuItem("Build/iOS")]
    static void iOSBuild()
    {

        // 有効なシーン一覧のパスを取得
        var scenes = EditorBuildSettings.scenes.Where(s => s.enabled).Select(s => s.path).ToArray();

        // 出力用のフォルダを設定
        var outputFile = Application.dataPath + "/XcodeProject";
        if (Directory.Exists(outputFile))
        {
            Directory.Delete(outputFile, true);
        }

        var target = BuildTarget.iOS;
        var options = BuildOptions.None;

        BuildPipeline.BuildPlayer(scenes, outputFile, target, options);
    }
}
